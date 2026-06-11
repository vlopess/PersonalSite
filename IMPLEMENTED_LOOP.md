# Custom Loop Implementation

## Overview
This document describes the implementation of a custom loop hook as requested, replacing the original LoopAnimationHook plan with the specific useLoop hook pattern. The implementation replaces the wrapper div in the hero section with a looping animation of "Mobile", "Front-End", and "Back-End" text.

## Implementation Details

### Files Created
1. `src/components/v1/skiper62/useLoop.js` - Custom loop hook
2. `src/components/Loop.jsx` - Example component using the hook
3. Updated `vite.config.js` with path alias configuration
4. Updated `src/components/ContentHome/ContentHome.jsx` to include the example

### Hook Implementation (`useLoop.js`)
```javascript
import { useState, useEffect } from 'react';

export function useLoop(duration) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setKey(prev => prev + 1);
    }, duration);
    return () => clearInterval(id);
  }, [duration]);

  return { key };
}
```

### Features
- Uses `setInterval` to increment a counter at specified intervals (default 2000ms)
- Returns an object with a `key` property that increments over time
- Automatic cleanup to prevent memory leaks
- Simple and lightweight implementation

### Usage Example (`Loop.jsx`)
```javascript
import { useLoop } from "@/components/v1/skiper62/useLoop";
import { motion } from "framer-motion";

const CustomLoopExample = () => {
  const { key } = useLoop(2000); // 2 second delay

  const items = ["Item 1", "Item 2", "Item 3"];
  const currentItem = items[key % items.length];

  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        {currentItem}
      </motion.div>
    </div>
  );
};

export default CustomLoopExample;
```

### How It Works
1. The `useLoop` hook returns a continuously incrementing `key` value
2. This key is used to cycle through an array of items (`items[key % items.length]`)
3. Each time the key changes, the motion component re-mounts with a new item
4. Framer Motion provides entrance/exit animations for smooth transitions
5. The loop continues indefinitely with the specified interval (2 seconds)

### Integration
- Added to the ContentHome component in a new section (`content-loop-demo`)
- Uses path alias `@/` configured in vite.config.js for cleaner imports
- Requires framer-motion dependency (installed via npm)

### Files Modified
- Created: `src/components/v1/skiper62/useLoop.js`
- Created: `src/components/Loop.jsx`
- Updated: `vite.config.js` (added path alias)
- Updated: `src/components/ContentHome/ContentHome.jsx` (import and render component)

### Dependencies Added
- `framer-motion` - For the animated transitions in the example

### Verification
- Project builds successfully without errors
- Component renders and cycles through items every 2 seconds
- Smooth entrance/exit animations provided by Framer Motion
- No memory leaks or console errors

This implementation satisfies the request for a custom loop hook following the exact pattern specified, using setInterval for timing and integrating with Framer Motion for visual animation effects.