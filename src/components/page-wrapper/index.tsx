'use client';

import { motion } from 'framer-motion';

interface PageWrapperProps {
	children?: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
	return (
		<motion.main
			className='mx-auto mt-12 min-h-[calc(100vh_-_56px_-_196px)] max-w-3xl px-8'
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{children}
		</motion.main>
	);
};

export default PageWrapper;