"use client"

import Link from "next/link"

export default function TaxCreditsPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f1f0] px-10 py-3">
          <Link href="/" className="flex items-center gap-4 text-[#181311] hover:opacity-80 transition-opacity">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em]">Greater Good MS</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
                href="/about"
              >
                About Us
              </Link>
              <Link className="text-[#f46a25] text-sm font-medium leading-normal" href="/tax-credits">
                Tax Credits
              </Link>
              <Link
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors">
              <span className="truncate">Donate Now</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181311] tracking-light text-[32px] font-bold leading-tight">Tax Credits</p>
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Explore the various tax credit programs available in Mississippi that allow you to redirect your tax
                  dollars to support eligible nonprofits.
                </p>
              </div>
            </div>

            {/* Individual Tax Credits */}
            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Individual Tax Credits
            </h2>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Qualified Charitable Organization (QCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to eligible charitable organizations.
                </p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Qualified Foster Care Charitable Organization (QFCCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to organizations supporting foster care.
                </p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Educational Tax Home Organization (ETHO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to organizations providing educational support
                  at home.
                </p>
              </div>
            </div>

            {/* Business Tax Credits */}
            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Business Tax Credits
            </h2>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">Economic Opportunity (ECO) Credit</p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations fostering economic
                  opportunities.
                </p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Private Rehabilitation Charitable Organization (PRCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations involved in private
                  rehabilitation.
                </p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Educational Support Charitable Organization (ESCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations providing educational
                  support.
                </p>
              </div>
            </div>

            {/* Eligible Organizations */}
            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Eligible Organizations
            </h2>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Each tax credit program supports a specific category of nonprofits. You can view a list of eligible
              organizations under each program to make informed decisions about where to redirect your tax dollars.
              These organizations are vetted and approved by the state, ensuring your contributions support legitimate
              and impactful causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
