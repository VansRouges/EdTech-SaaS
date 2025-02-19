import { create } from "zustand";

interface Profile {
  name: string;
  email: string;
  role: string;
  userId: string;
  isParent: boolean;
  isAdmin: boolean;
  isTeacher: boolean;
  schoolId: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}

interface ProfileStore {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));