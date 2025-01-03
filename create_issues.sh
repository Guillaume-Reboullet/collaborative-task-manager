#!/bin/bash

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null
then
    echo "GitHub CLI not installed. Install it from https://cli.github.com/."
    exit 1
fi

# Read tasks from task_titles.txt
while IFS= read -r task; do
    # Create GitHub issue for each task
    gh issue create --title "$task" --body "Refer to the PROJECT_TASK_PLAN.md file for detailed steps." --label "task"
    echo "Created issue: $task"
done < task_titles.txt
