import type { ComponentType, SVGProps } from 'react';

export type ArticleItem = {
    id: string;
    title: string;
    date: string;
    };

export type ProjectItem = {
    name: string;
    description: string;
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    };