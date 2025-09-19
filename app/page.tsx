"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HandWaving,
  Calculator,
  File,
  Paperclip,
  Certificate,
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  Upload,
} from "@phosphor-icons/react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("individual")

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const partnerImages = [
    { src: "/images/hope-village-new.jpg", alt: "Hope Village for Children" },
    { src: "/images/pregnancy-choices-new.png", alt: "Center for Pregnancy Choices of Meridian" },
    { src: "/images/boys-girls-club-new.jpg", alt: "Boys & Girls Clubs of East Mississippi" },
    { src: "/images/camp-kamassa-correct.jpg", alt: "Camp Kamassa - Mississippi's Toughest Kids Foundation" },
    { src: "/images/ms-police-sheriffs-correct.jpg", alt: "Mississippi Center for Police & Sheriffs" },
    { src: "/hillcrest-christian-school-logo.jpg", alt: "Hillcrest Christian School" },
    { src: "/providence-christian-academy-logo.jpg", alt: "Providence Christian Academy" },
  ]

  const taxCredits = [
    {
      code: "QCO",
      name: "Qualified Charitable Organizations",
      description: "Camp Kamassa, Center for Pregnancy Choices of Meridian",
    },
    {
      code: "QFCCO",
      name: "Qualified Foster Care Charitable Organizations",
      description: "Hope Village",
    },
    {
      code: "ECO",
      name: "Eligible Charitable Organizations",
      description: "Hope Village, MS Center for Police and Sheriffs",
    },
    {
      code: "PRCO",
      name: "Pregnancy Resource Charity Organizations",
      description: "Center for Pregnancy Choices of Meridian, MS Center for Police and Sheriffs",
    },
    {
      code: "ETHO",
      name: "Eligible Transitional Housing Organizations",
      description: "Hope Village, MS Center for Police and Sheriffs",
    },
    {
      code: "ESCO",
      name: "Educational Services Charitable Organizations",
      description: "Hillcrest Christian School, Providence Christian Academy",
    },
  ]

  const steps = [
    {
      icon: HandWaving,
      title: "Apply Online",
      description: "Apply online at https://www.dor.ms.gov/charitable-contribution-credits",
    },
    {
      icon: Certificate,
      title: "Receive Verification Letter",
      description: "You will receive a verification letter within 30 days.",
    },
    {
      icon: Calculator,
      title: "Make Donation",
      description: "Make your donation to the approved nonprofit organization.",
    },
    {
      icon: Upload,
      title: "Upload Proof of Donation",
      description: "Upload proof of donation to MSDOR.",
    },
    {
      icon: File,
      title: "Official Notice of Tax Credit",
      description: "Receive official notice of tax credit by mail.",
    },
    {
      icon: Paperclip,
      title: "Property Tax Credit (if applicable)",
      description: "If utilizing property taxes, bring your credit to your county tax collector.",
    },
  ]

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white font-sans overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f1f0] px-10 py-3">
          <div className="flex items-center gap-4 text-[#181311]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em]">Greater Good MS</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9"></div>
            <div className="flex items-center gap-9 ml-8">
              <Link
                href="/about"
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/tax-credits"
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                Tax Credits
              </Link>
              <a
                href="#how-to-donate"
                onClick={(e) => handleSmoothScroll(e, "how-to-donate")}
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                How to Donate
              </a>
              <Link
                href="/contact"
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                Contact
              </Link>
            </div>
            <Link href="/donate">
              <Button className="bg-[#f46a25] hover:bg-[#e55a1f] text-white font-bold">Donate Now</Button>
            </Link>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col @[640px]:flex-row gap-6 @[640px]:gap-8 bg-gradient-to-br from-blue-50 to-white @[480px]:rounded-xl items-center justify-center p-6 @[480px]:p-8">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-2 @[640px]:order-1">
                    <img
                      src="/images/greater-good-title-logo.jpg"
                      alt="Greater Good MS Logo"
                      className="w-48 h-48 @[480px]:w-56 @[480px]:h-56 @[640px]:w-72 @[640px]:h-72 object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-4 @[640px]:gap-6 text-center @[640px]:text-left max-w-lg order-1 @[640px]:order-2">
                    <div className="flex flex-col gap-3 @[480px]:gap-4">
                      <h1 className="text-[#181311] text-2xl @[480px]:text-3xl @[640px]:text-4xl @[768px]:text-5xl font-black leading-tight tracking-[-0.033em] text-balance">
                        Converting Your Taxes to Mississippi's Greater Good
                      </h1>
                      <h2 className="text-[#8a6e60] text-sm @[480px]:text-base @[640px]:text-lg font-normal leading-relaxed text-pretty">
                        At Greater Good MS, our mission is to empower and equip Mississippi's non-profit organizations
                        by connecting them with donors through innovative tax credit programs. Rooted in Christian
                        values, we serve as a trusted liaison, fostering generosity and stewardship to advance the
                        greater good across Mississippi.
                      </h2>
                    </div>
                    <div className="flex flex-col @[480px]:flex-row gap-3 @[640px]:gap-4 justify-center @[640px]:justify-start">
                      <Button className="bg-[#f46a25] hover:bg-[#e55a1f] text-white font-bold h-10 @[640px]:h-12 px-4 @[640px]:px-6">
                        Learn More
                      </Button>
                      <Link href="/donate">
                        <Button
                          variant="outline"
                          className="border-[#f46a25] text-[#f46a25] hover:bg-[#f46a25] hover:text-white h-10 @[640px]:h-12 px-4 @[640px]:px-6 bg-transparent"
                        >
                          Donate Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <h2 className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Impactful Partners
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
              {partnerImages.map((partner, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-full h-32 flex items-center justify-center bg-white rounded-xl border border-[#e6dfdb] p-4 hover:shadow-md transition-shadow duration-200">
                    <img
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tax Credits Section */}
            <h2
              id="tax-credits"
              className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Mississippi Tax Credits: Children's Promise Act & Pregnancy Resource Act
            </h2>
            <p className="text-[#8a6e60] text-base font-normal leading-normal pb-3 px-4">
              Mississippi passed the Children's Promise Act in 2019 and the Pregnancy Resource Act in 2022, which allows
              businesses and individuals to allocate their tax dollars towards eligible nonprofit organizations while
              receiving dollar-for-dollar state tax credits. You can direct up to 50% for each tax credit and stack
              credits for 100% of your income tax liability and property taxes.
            </p>

            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              {taxCredits.map((credit, index) => (
                <div key={index} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e6dfdb] py-5">
                  <p className="text-[#8a6e60] text-sm font-normal leading-normal">{credit.code}</p>
                  <div>
                    <p className="text-[#181311] text-sm font-medium leading-normal">{credit.name}</p>
                    <p className="text-[#8a6e60] text-sm font-normal leading-normal">{credit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 pb-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-[#181311] text-base font-semibold mb-2">Tax Credit Limits:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#181311]">Individual Taxes:</p>
                    <p className="text-[#8a6e60]">
                      Income Tax ($1,200 filing single or $2,400 filing married), and 50% of Ad Valorem Tax
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[#181311]">Business Taxes:</p>
                    <p className="text-[#8a6e60]">
                      Income Tax (50% of tax liability), 50% of Insurance Premium Tax and Insurance Premium Retaliatory
                      Tax, and 50% of Ad Valorem Tax
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <h2
              id="how-to-donate"
              className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Simple Steps to Make a Difference
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isLast = index === steps.length - 1

                return (
                  <div key={index} className="contents">
                    <div className="flex flex-col items-center gap-1 pt-3">
                      <div className="text-[#181311]">
                        <IconComponent size={24} />
                      </div>
                      {!isLast && <div className="w-[1.5px] bg-[#e6dfdb] h-2 grow"></div>}
                    </div>
                    <div className={`flex flex-1 flex-col py-3 ${isLast ? "pb-3" : ""}`}>
                      <p className="text-[#181311] text-base font-medium leading-normal">{step.title}</p>
                      <p className="text-[#8a6e60] text-base font-normal leading-normal">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <p className="text-[#8a6e60] text-sm font-normal leading-normal pb-3 pt-1 px-4">
              Contact Information: Callie Rush Waite, Director of Donor Relations | 601-938-3253 |
              callie.waite@greatergoodms.com
            </p>
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link
                  href="/privacy-policy"
                  className="text-[#8a6e60] text-base font-normal leading-normal min-w-40 hover:text-[#181311] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-[#8a6e60] text-base font-normal leading-normal min-w-40 hover:text-[#181311] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-[#8a6e60] hover:text-[#f46a25] transition-colors">
                  <TwitterLogo size={24} />
                </a>
                <a href="#" className="text-[#8a6e60] hover:text-[#f46a25] transition-colors">
                  <FacebookLogo size={24} />
                </a>
                <a href="#" className="text-[#8a6e60] hover:text-[#f46a25] transition-colors">
                  <InstagramLogo size={24} />
                </a>
              </div>
              <p className="text-[#8a6e60] text-base font-normal leading-normal">
                © 2023 Greater Good MS. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  )
}
