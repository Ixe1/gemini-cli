/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTool, ToolCallConfirmationDetails, ToolResult } from './tools.js';

export interface DeliverPlanParams {
  plan: string;
}

export class DeliverPlanTool extends BaseTool<DeliverPlanParams, ToolResult> {
  static readonly Name = 'deliver_plan';

  constructor() {
    super(
      DeliverPlanTool.Name,
      'Deliver Plan',
      'Present a comprehensive plan to the user for approval or rejection',
      {
        properties: {
          plan: {
            type: 'string',
            description:
              'The comprehensive plan to present to the user. Should be well-structured markdown with clear sections and action items.',
          },
        },
        required: ['plan'],
        type: 'object',
      },
      true,
      false,
    );
  }

  validateToolParams(params: DeliverPlanParams): string | null {
    if (!params.plan || typeof params.plan !== 'string') {
      return 'Plan is required and must be a string';
    }
    if (params.plan.trim().length === 0) {
      return 'Plan cannot be empty';
    }
    return null;
  }

  getDescription(params: DeliverPlanParams): string {
    const planPreview = params.plan.slice(0, 200);
    return `Present plan for approval:\n\n${planPreview}${params.plan.length > 200 ? '...' : ''}`;
  }

  async shouldConfirmExecute(
    params: DeliverPlanParams,
    _signal: AbortSignal,
  ): Promise<ToolCallConfirmationDetails | false> {
    return {
      type: 'info',
      title: '📋 Present plan for approval',
      prompt: this.getDescription(params),
      onConfirm: async () => {},
    };
  }

  async execute(
    _params: DeliverPlanParams,
    _signal: AbortSignal,
  ): Promise<ToolResult> {
    // The actual UI display and user interaction will be handled by the React component
    // This method just returns a placeholder that will trigger the UI flow
    return {
      llmContent: '__PLAN_DELIVERY_REQUESTED__',
      returnDisplay: 'Plan presented to user for approval.',
    };
  }
}