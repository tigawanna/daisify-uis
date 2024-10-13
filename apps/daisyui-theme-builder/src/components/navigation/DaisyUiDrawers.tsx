/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@tanstack/react-router";
import { FileUp, Import, X } from "lucide-react";
import { ExportTheme } from "../all-in-one-theme-editor/ExportTheme";
import { ImportTheme } from "../all-in-one-theme-editor/ImprtTheme";
import { DrawerIds } from "@/routes/-components/type";
import { lazy, Suspense } from "react";
import { useDaisyUITheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";
import { DaisyUIThemeSearchParmsTypes } from "../all-in-one-theme-editor/utils/schema";

const DaisyUIThemeEditor = lazy(
  () => import("../all-in-one-theme-editor/DaisyUIThemeEditor"),
);

interface MainDaisyUiDrawerProps {
  closeDrawer: (drawerId: DrawerIds) => void;

}

export function MainDaisyUiDrawer({
  closeDrawer,
}: MainDaisyUiDrawerProps) {
  const {searchParams,updateThemeName,updateTheme} = useDaisyUITheme()
  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="main-page-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu min-h-full w-[80%] bg-base-200 py-[20%] text-base-content @container md:w-[40%] md:p-4 md:py-3">
        {/* Sidebar content here */}
        <div className="flex w-full md:justify-end">
          <button
            className="btn btn-square btn-ghost btn-sm"
            onClick={() => closeDrawer("main-page-drawer")}
          >
            <X />
          </button>
        </div>
        {/* links */}
        <div
          onClick={() => closeDrawer("main-page-drawer")}
          className="flex w-full flex-col justify-between gap-2 divide-y"
        >
          <Link
            search={searchParams}
            to="/"
            className="bg-base-100/70 p-5 text-center text-2xl font-bold hover:bg-base-100/20 md:p-10"
          >
            UI
          </Link>

          <Link search={searchParams} to="/shadcn" className="btn btn-link">
            shadcn
          </Link>

          <Link search={searchParams} to="/twarkui" className="btn btn-link">
            twark
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <label
            htmlFor="import-theme-drawer"
            className="btn drawer-button btn-sm flex gap-2"
          >
            import <Import />
          </label>

          <label
            htmlFor="export-theme-drawer"
            className="btn drawer-button btn-sm flex gap-2"
          >
            export <FileUp />
          </label>
        </div>
        <Suspense fallback={<div className="skeleton min-h-[60vh] w-full" />}>
          <DaisyUIThemeEditor theme={searchParams} updateTheme={updateTheme} updateLockedTheme={updateThemeName} />
        </Suspense>
      </ul>
    </div>
  );
}

