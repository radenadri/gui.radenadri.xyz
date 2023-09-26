import React, { forwardRef } from 'react';
import { motion } from "framer-motion";

type ComponentProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
const Component = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

const MotionGeist = motion(Component);

export default MotionGeist;
