import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IPlayerScreenState {
  playerType: string;
  maximizeIsActive: boolean;
  switchPlayerType: () => void;
  switchBtnType: () => void;
}

export const useScreenStore = create<IPlayerScreenState>()(
  devtools(
    persist(
      (set) => ({
        playerType: "full",
        maximizeIsActive: false,
        switchPlayerType: () =>
          set((state) =>
            state.playerType == "full"
              ? { playerType: "mini" }
              : { playerType: "full" }
          ),
        switchBtnType: () =>
          set((state) =>
            state.maximizeIsActive == true
              ? { maximizeIsActive: false }
              : { maximizeIsActive: true }
          ),
      }),
      {
        name: "player-storage",
      }
    )
  )
);
