# Testing Planning Mode

## How to Test the Planning Mode Feature

1. **Start Gemini CLI**
   ```
   npm start
   ```

2. **Enter Planning Mode**
   - Press `Shift+Tab` twice to cycle through modes:
     - First press: DEFAULT → AUTO_EDIT
     - Second press: AUTO_EDIT → PLANNING
   - You should see "📋 planning mode" indicator

3. **Test Planning Mode**
   - Ask Gemini to create a plan for implementing a feature
   - Example: "Create a plan to implement a user authentication system"
   - Gemini should:
     - Research the codebase
     - Use only read-only tools
     - Present a comprehensive plan using DeliverPlan tool

4. **Plan Display**
   - A plan display UI should appear with:
     - The proposed plan in markdown format
     - Accept/Decline buttons
     - Tab/arrow keys to switch between buttons

5. **Accept Plan**
   - Press Enter on Accept button
   - Mode should switch to AUTO_EDIT
   - Plan should start executing automatically

6. **Decline Plan**
   - Press Enter on Decline button
   - You can provide feedback for revision

## Expected Behavior

- In planning mode, Gemini can only use:
  - ls, read_file, grep, glob
  - web_fetch, web_search
  - deliver_plan
- Cannot use: edit, write_file, shell

## Mode Cycling

- Shift+Tab cycles: DEFAULT → AUTO_EDIT → PLANNING → DEFAULT
- Ctrl+Y toggles YOLO mode separately