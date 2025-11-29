# Dashboard & Self-Care Implementation Plan

## Goal Description
1.  **Dashboard Restructuring**: Replace "Quick Actions" with 3 Focus Cards: **Daily Check-in**, **Self-Care**, and **Resources**.
2.  **Onboarding**: Add "Self-care" as a selectable goal.
3.  **Self-Care Framework**: Implement a structured Self-Care system with categories (Type, Cost, Time) to support future AI recommendations.

## User Review Required
- **Self-Care Data**: I will create a `lib/selfCareData.js` with a few examples. The user will provide the full list of ~50 items per category later.
- **AI Recommendations**: For now, I will implement a basic filter/randomizer. The "AI Profile Review" logic will be a future enhancement.

## Proposed Changes

### 1. Self-Care Data Structure (`lib/selfCareData.js`)
- **New File**: Define `SELF_CARE_ACTIVITIES` with fields: `id`, `label`, `category` (Type), `cost` (Low/Med/High), `time` (min), `xp`.
- **Categories**: Physical, Emotional, Social, Practical, Spiritual.

### 2. Update `components/AddWinModal.js`
- **Change**:
    -   Add `initialTab` prop.
    -   **Enhance "Mindfulness" Tab** (Rename to "Self-Care"):
        -   Add filters for **Time** (e.g., < 10m, 30m+) and **Cost**.
        -   Display activities from `selfCareData.js`.
        -   **Action**: Clicking an activity logs it as a Win + Journal Entry (auto-generated text: "Completed self-care activity: [Activity Name]").

### 3. Update `pages/dashboard.js`
- **Change**:
    -   Implement the 3 Focus Cards layout.
    -   **Self-Care Card**: Opens `AddWinModal` with `initialTab='self-care'`.

### 4. Update `pages/onboarding/goals.js`
- **Change**: Add "Self-care" to the `goals` array.

## Verification Plan
### Manual Verification
1.  **Onboarding**: Verify "Self-care" goal option.
2.  **Dashboard**: Verify 3 Focus Cards layout.
3.  **Self-Care Flow**:
    -   Click "Self-Care" card.
    -   Filter by Time/Cost (verify UI updates).
    -   Select an activity.
    -   Verify it logs a Win (+XP) and a Journal Entry ("Completed...").
