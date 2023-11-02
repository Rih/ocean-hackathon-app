import type { IMessage } from '$lib/components/types';
import type { Ownership } from '@utils/global';
import { writable } from 'svelte/store';

export interface MessageStore {
    currentContact: string;
    hasMore: boolean;
    loading: boolean;
    data: IMessage[];
}

const MESSAGES_INIT: MessageStore = {
    currentContact: '',
    hasMore: false,
    loading: false,
    data: [] as IMessage[]
}

const { subscribe, set, update } = writable(MESSAGES_INIT);

const setCurrentContact = (contactId: string) => update(state => {
    return { ...state, currentContact: contactId };
});

const setMoreMessages = (messages: IMessage[], hasMore: boolean, override: boolean = false) => update(state => {
    if (override) {
        return {
            ...state,
            hasMore,
            loading: false,
            data: [...messages],
        }
    }
    const prevMessages = [...state.data]
    const newMessages = [...messages]
    return {
        ...state,
        hasMore,
        loading: false,
        data: [ ...newMessages, ...prevMessages]
    }
})

const setLoading = (loading: boolean) => update(state => {
    return { ...state, loading };
})

const addMessage = (
    message: string, 
    is_from: Ownership.MYSELF | Ownership.CUSTOMER | Ownership.SYSTEM, 
    type_of: string, 
    attach: string, 
    is_valid: boolean, 
    username: string, 
    fullname: string) => update(state => {
    const today = new Date();
    const msg = { 
        text: message, 
        messageTime: today.toISOString(),
        is_from, 
        type_of,
        attach,
        is_valid,
        username,
        fullname,
    };
    return { ...state, data: [...state.data, msg] }
})

const reset = () => {
    set(MESSAGES_INIT);
};

export default {
    subscribe,
    setLoading,
    setCurrentContact,
    setMoreMessages,
    addMessage,
    reset,
}