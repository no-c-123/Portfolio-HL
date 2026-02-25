import { atom } from 'nanostores';
import type { ProfileType } from '../data/portfolio';

export const profileStore = atom<ProfileType>('fullstack');

export const setProfile = (profile: ProfileType) => {
  profileStore.set(profile);
};
