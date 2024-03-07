import type { Node } from '@xyflow/svelte';
import type { Writable } from 'svelte/store';

import type { Variant } from '$lib/components/ui/button';
import type { Tables } from '$lib/types/supabase';
import type Stripe from '@stripe/stripe-js';
import type { PaymentMethod } from '@stripe/stripe-js';

export type Crew = Tables<'crews'>;

export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & {
	currentTarget: EventTarget & T;
};

export type PanelAction = {
	name: string;
	loading?: boolean;
	buttonVariant: Variant;
	onclick?: (e: Event) => void;
	isCustom?: boolean;
};

export interface ContextMap {
	crew: CrewContext;
	subscriptionStore: Writable<{
		sub: Stripe.Subscription | null;
		tier: any | null;
		paymentMethod: PaymentMethod | null;
	}>;
}

export interface CrewContext {
	receiver: Writable<{ node: Node; targetCount: number } | null>;
	count: Writable<{ agents: number; prompts: number }>;
}

export type Categories =
	| 'multi-agents'
	| 'automation'
	| 'tutorial'
	| 'reviews'
	| 'top-softwares'
	| 'ai'
	| 'learning'
	| 'mathematics'
	| 'engineering'
	| 'computer-science'
	| 'economics'
	| 'business'
	| 'art'
	| 'music'
	| 'technology'
	| 'science-fiction';

export type SaveResult = {
	error: boolean;
	message: string | null;
};