import { create } from "zustand";

export const useStore = create((set) => ({
    gameState: 0, // 0 = start, 1 = playing, 2 = end
    missed: 0, // amount of fruits missed
    spawnIntervalTime: 1.5, // time between each fruit spawn
    points: 0, // amount of fruits cut
    isSlicing: false, // is the user touching or holding pointer down

    incrementPoint: () => set((state) => ({ points: state.points + 1 })),
    setPoints: (amount) => set({ points: amount }),
    clearPoints: () => set({ points: 0 }),

    setGameState: (state) => set({ gameState: state }),
    setMissed: (amount) => set({ missed: amount }),
    setSpawnIntervalTime: (time) => set({ spawnIntervalTime: time }),
    setIsSlicing: (bool) => set({ isSlicing: bool }),
}));
