/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { Box, Text, useInput } from 'ink';
import { Colors } from '../colors.js';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  isSelected?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  isSelected = false,
  variant = 'primary',
  disabled = false,
}) => {
  useInput((input, key) => {
    if (isSelected && !disabled && (key.return || input === ' ')) {
      onPress();
    }
  }, { isActive: isSelected });

  const backgroundColor = disabled
    ? Colors.Gray
    : isSelected
    ? (variant === 'primary' ? Colors.AccentGreen : Colors.AccentBlue)
    : undefined;

  const textColor = disabled
    ? Colors.Comment
    : isSelected
    ? Colors.Background
    : (variant === 'primary' ? Colors.AccentGreen : Colors.AccentBlue);

  return (
    <Box
      paddingX={2}
      paddingY={0}
      borderStyle="round"
      borderColor={disabled ? Colors.Gray : (variant === 'primary' ? Colors.AccentGreen : Colors.AccentBlue)}
    >
      <Text
        backgroundColor={backgroundColor}
        color={textColor}
        bold={isSelected}
      >
        {children}
      </Text>
    </Box>
  );
};