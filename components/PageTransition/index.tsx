import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...props }: PageTransitionProps, ref: PageTransitionRef) {
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
			className={`max-h-full`}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)