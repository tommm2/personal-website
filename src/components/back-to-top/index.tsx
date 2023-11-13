'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	function handleClick() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		function handleScroll() {
			const { scrollTop } = document.documentElement;

			setIsVisible(scrollTop > 30);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					className='fixed bottom-20 right-8 flex items-center rounded-xl bg-base-800 p-2.5'
					type='button'
					aria-label='back to top'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 20 }}
					onClick={handleClick}
				>
					<RiArrowUpSLine className='h-6 w-6' />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default BackToTop;
