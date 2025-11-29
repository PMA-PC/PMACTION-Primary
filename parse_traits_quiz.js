const fs = require('fs');

const inputFile = 'raw_traits_quiz.txt';
const outputFile = 'neurodiversity_traits_seed.sql';

try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const lines = data.split(/\r?\n/);

    const sqlStatements = [];

    // Header
    sqlStatements.push("-- Insert Neurodiversity Traits Assessment");
    sqlStatements.push("INSERT INTO assessments (slug, name, description, category, total_questions, scoring_method, interpretation_ranges) VALUES");
    sqlStatements.push("('neurodiversity-traits', 'Neurodiversity Traits Profile', 'A comprehensive self-assessment of neurodivergent traits across 8 categories. Rate each trait from 1 (Does not apply) to 5 (Core part of my experience).', 'custom', 0, 'sum', ");
    sqlStatements.push("'{");
    sqlStatements.push('  "ranges": [');
    sqlStatements.push('    {"min": 0, "max": 1000, "label": "Completed", "interpretation": "This profile helps identify your unique neurodivergent traits. Review your highest scored categories to understand your strengths and challenges."}');
    sqlStatements.push('  ]');
    sqlStatements.push("}'::jsonb)");
    sqlStatements.push("ON CONFLICT (slug) DO NOTHING;");
    sqlStatements.push("");
    sqlStatements.push("-- Insert Questions");
    sqlStatements.push("DO $$");
    sqlStatements.push("DECLARE");
    sqlStatements.push("    assessment_id_var INTEGER;");
    sqlStatements.push("BEGIN");
    sqlStatements.push("    SELECT id INTO assessment_id_var FROM assessments WHERE slug = 'neurodiversity-traits';");
    sqlStatements.push("");

    let currentCategory = "";
    let questionNumber = 1;

    const likertOptions = JSON.stringify([
        { "value": 1, "label": "1 - Does not apply" },
        { "value": 2, "label": "2 - Applies sometimes" },
        { "value": 3, "label": "3 - Noticeable part of life" },
        { "value": 4, "label": "4 - Significant part of life" },
        { "value": 5, "label": "5 - Dominant/Core part" }
    ]);

    const questions = [];
    let currentQ = null;

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        if (line.match(/^[IVX]+\.\s/)) {
            currentCategory = line;
            continue;
        }

        if (line.startsWith("Example:")) {
            if (currentQ) {
                currentQ.example = line.replace("Example:", "").trim();
            }
            continue;
        }

        if (line.includes(":") && !line.startsWith("Example:")) {
            const parts = line.split(":");
            const title = parts[0].trim();
            const definition = parts.slice(1).join(":").trim();

            currentQ = {
                category: currentCategory,
                title: title,
                definition: definition,
                example: ""
            };
            questions.push(currentQ);
        } else if (currentQ && !line.startsWith("Example:")) {
            currentQ.definition += " " + line;
        }
    }

    for (const q of questions) {
        let qText = `**${q.title}**: ${q.definition}`;
        if (q.example) {
            qText += ` (Example: ${q.example})`;
        }

        // Escape single quotes for SQL
        qText = qText.replace(/'/g, "''");

        const sql = `    INSERT INTO assessment_questions (assessment_id, question_number, question_text, response_type, response_options) VALUES (assessment_id_var, ${questionNumber}, '${qText}', 'likert', '${likertOptions}'::jsonb) ON CONFLICT (assessment_id, question_number) DO NOTHING;`;
        sqlStatements.push(sql);
        questionNumber++;
    }

    sqlStatements.push("    -- Update total questions count");
    sqlStatements.push(`    UPDATE assessments SET total_questions = ${questionNumber - 1} WHERE id = assessment_id_var;`);
    sqlStatements.push("END $$;");

    fs.writeFileSync(outputFile, sqlStatements.join('\n'));
    console.log(`Successfully generated ${outputFile}`);

} catch (err) {
    console.error('Error:', err);
}
