'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Post } from 'contentlayer/generated';

import Input from '@/components/input';
import PostCard from '@/components/post-card';
import Heading from '@/components/heading';
import { formatQuery } from '@/lib/utils';

interface PostListProps {
	posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
	const [query, setQuery] = useState('');
	const filterPosts = posts.filter(({ title }) => {
		const formattedQuery = formatQuery(query);
		const formattedTitle = formatQuery(title);

		return formattedTitle.includes(formattedQuery);
	});

	return (
		<>
			<Input
				placeholder='請輸入文章標題'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Heading className='mb-6'>
				所有文章
			</Heading>
			{filterPosts.length !== 0 ? (
				<div className='space-y-4'>
					{filterPosts.map(post => <PostCard key={post.slug} post={post} />)}
				</div>
			) : (
				<div className='flex flex-col items-center justify-center gap-4'>
					<span>沒有搜尋到結果</span>
					<Image
						width={150}
						height={150}
						src='/images/no-results.png'
						alt='no-results'
					/>
				</div>
			)}
		</>
	);
};

export default PostList;