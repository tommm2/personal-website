'use client';

import { RiCheckFill, RiFileCopy2Fill } from 'react-icons/ri';

import { useClipboard } from '@/hooks/use-clipboard';
import { cn } from '@/utils/cn';

interface CopyButtonProps {
	className?: string,
	copyText: string
}

const CopyButton = ({
	className = '',
	copyText,
}: CopyButtonProps) => {
	const { copy, isCopied } = useClipboard();

	const _handleCopy = () => {
		copy(copyText);
	};

	return (
		<button
			className={cn(
				'absolute right-3 rounded-md border bg-base-800 border-base-700/60 p-2 opacity-0 transition-all group-hover:opacity-100',
				{ 'text-primary-500': isCopied },
				className,
			)}
			title='copy code'
			aria-label='copy code'
			disabled={isCopied}
			onClick={_handleCopy}
		>
			{isCopied ? <RiCheckFill /> : <RiFileCopy2Fill />}
		</button>
	);
};

export default CopyButton;
