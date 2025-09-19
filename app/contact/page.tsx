"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-sans">
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
              <Link
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
                href="/tax-credits"
              >
                Tax Credits
              </Link>
              <Link className="text-[#f46a25] text-sm font-medium leading-normal" href="/contact">
                Contact
              </Link>
            </div>
            <Link
              href="/donate"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
            >
              <span className="truncate">Donate Now</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181311] tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  We're here to help! Reach out with any questions or inquiries about redirecting taxes to support
                  Mississippi nonprofits.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none min-h-36 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
                >
                  <span className="truncate">Submit</span>
                </button>
              </div>
            </form>

            <h3 className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Contact Information
            </h3>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">Callie Rush Waite</p>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Director of Donor Relations
            </p>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">Phone: (601) 938-3253</p>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Email: callie.waite@greatergoodms.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
