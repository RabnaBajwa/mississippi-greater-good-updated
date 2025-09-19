"use client"
import Link from "next/link"
import { Phone, Envelope } from "@phosphor-icons/react"

export default function AboutPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f1f0] px-10 py-3">
          <Link
            href="/"
            className="flex items-center gap-4 text-[#181311] hover:text-[#f46a25] transition-colors cursor-pointer"
          >
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Greater Good MS</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link href="/about" className="text-[#f46a25] text-sm font-medium leading-normal">
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                Contact
              </Link>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors">
              <span className="truncate">Donate</span>
            </button>
          </div>
        </header>

        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#181311] tracking-light text-[32px] font-bold leading-tight min-w-72">About Us</p>
            </div>

            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Greater Good MS, our mission is to empower and equip Mississippi's non-profit organizations by
              connecting them with donors through innovative tax credit programs of Mississippi. Rooted in Christian
              values, we serve as a trusted liaison, fostering generosity and stewardship to advance the greater good
              across Mississippi. By building lasting partnerships between non-profits and supporters, we strive to
              impact people, strengthen communities, and glorify God through every gift given and life changed.
            </p>

            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Mission
            </h2>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We facilitate the redirection of tax dollars towards impactful non-profit initiatives through
              Mississippi's Children's Promise Act and Pregnancy Resource Act. These programs allow businesses and
              individuals to receive dollar-for-dollar tax credits while supporting eligible nonprofits that provide
              critical services to children and families across our beautiful state. Every redirected tax dollar becomes
              an investment in Mississippi's children and families.
            </p>

            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Values
            </h2>
            <div className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              <p className="mb-4">At Greater Good MS, we are guided by the following core values:</p>
              <ul className="space-y-3">
                <li>
                  <strong>Generosity:</strong> We believe in the power of giving and encourage a spirit of generosity
                  among taxpayers and businesses.
                </li>
                <li>
                  <strong>Stewardship:</strong> We are committed to responsible stewardship of resources, ensuring that
                  redirected tax dollars are utilized effectively and efficiently.
                </li>
                <li>
                  <strong>Community Impact:</strong> We strive to create a positive and lasting impact on communities
                  throughout Mississippi by supporting vital non-profit programs.
                </li>
                <li>
                  <strong>Integrity:</strong> We operate with the highest ethical standards, maintaining transparency
                  and accountability in all our activities.
                </li>
                <li>
                  <strong>Faith:</strong> Our work is grounded in Christian values, reflecting our commitment to serving
                  others and building a more compassionate society.
                </li>
              </ul>
            </div>

            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our History
            </h2>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Greater Good MS was established to maximize the impact of Mississippi's charitable tax credit programs.
              Since our inception, we have successfully facilitated the redirection of tax credits to support a wide
              range of non-profit organizations and their impactful programs. We currently represent six approved
              beneficiaries under the Children's Promise Act and Mississippi's Pregnancy Resource Act, each providing
              life-changing programs for the most vulnerable. Our journey has been marked by collaboration, innovation,
              and a steadfast commitment to our mission.
            </p>

            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contact Information
            </h2>
            <div className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-[#f46a25]" />
                <span>601-938-3253</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Envelope size={20} className="text-[#f46a25]" />
                <span>callie.waite@greatergoodms.com</span>
              </div>
              <p className="mt-4">
                <strong>Callie Rush Waite</strong>
                <br />
                Director of Donor Relations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
