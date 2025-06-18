import { HTMLMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  interface MotionProps extends HTMLMotionProps<HTMLElement> {
    className?: string;
  }
} 