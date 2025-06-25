/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { Colors } from '../colors.js';
import { Button } from './Button.js';
import { MarkdownDisplay } from '../utils/MarkdownDisplay.js';

interface PlanDisplayProps {
  plan: string;
  onAccept: () => void;
  onDecline: () => void;
}

export const PlanDisplay: React.FC<PlanDisplayProps> = ({
  plan,
  onAccept,
  onDecline,
}) => {
  const [selectedButton, setSelectedButton] = useState<'accept' | 'decline'>('accept');

  useInput((input, key) => {
    if (key.tab || key.leftArrow || key.rightArrow) {
      setSelectedButton(prev => prev === 'accept' ? 'decline' : 'accept');
    }
  });

  return (
    <Box flexDirection="column" marginY={1}>
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor={Colors.AccentBlue}
        paddingX={2}
        paddingY={1}
      >
        <Text color={Colors.AccentBlue} bold>
          📋 Proposed Plan:
        </Text>
        <Box marginTop={1}>
          <MarkdownDisplay 
            text={plan} 
            isPending={false}
            terminalWidth={80}
          />
        </Box>
      </Box>

      <Box marginTop={1} gap={2}>
        <Button
          onPress={onAccept}
          isSelected={selectedButton === 'accept'}
          variant="primary"
        >
          ✅ Accept Plan
        </Button>
        <Button
          onPress={onDecline}
          isSelected={selectedButton === 'decline'}
          variant="secondary"
        >
          ❌ Decline Plan
        </Button>
      </Box>

      <Box marginTop={1}>
        <Text dimColor>
          Use Tab or arrow keys to switch between buttons, Enter to select
        </Text>
      </Box>
    </Box>
  );
};