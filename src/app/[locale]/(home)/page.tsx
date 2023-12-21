import { useLocale, useTranslations } from 'next-intl';
import { allPosts, allProjects } from 'contentlayer/generated';

import HeroSection from './partials/hero';
import ProjectSection from './partials/project-section';
import PostSection from './partials/post-section';

function HomePage() {
	const t = useTranslations();
	const locale = useLocale() as Locale;
	const projects = allProjects
		.filter((project) => project.language === locale)
		.splice(0, 2);
	const posts = allPosts
		.filter((posts) => posts.language === locale)
		.splice(0, 3);

	return (
		<div className='animate-in space-y-16 animation-delay-1'>
			<HeroSection
				name='Tom Jin'
				subTitle={t('homePage.subTitle')}
				description={t('homePage.description')}
			/>
			<ProjectSection
				title={t('common.projects')}
				projects={projects}
			/>
			<PostSection
				title={t('common.latestPosts')}
				posts={posts}
			/>
		</div>
	);
}

export default HomePage;