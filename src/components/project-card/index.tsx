import Image from 'next/image';
import { Project } from 'contentlayer/generated';

import Link from '@/components/link';

type ProjectCardProps = {
	project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
	const { slug, image, title, description } = project;

	return (
		<div className='group relative rounded-md border border-base-700/50 bg-base-900 shadow-2xl backdrop-blur'>
			<div className='absolute -left-px top-3/4 h-14 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='relative flex flex-col p-6'
				href={`/projects/${slug}`}
			>
				<Image
					className='h-auto w-full rounded-lg object-cover object-center sm:h-[12.5rem]'
					width={800}
					height={600}
					alt={title}
					src={image}
					priority
				/>
				<p className='mt-4 text-lg font-bold'>
					{title}
				</p>
				<p className='mt-2 line-clamp-1 text-base-300/80'>
					{description}
				</p>
			</Link>
		</div>
	);
}

export default ProjectCard;
