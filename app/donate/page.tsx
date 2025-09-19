"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function DonatePage() {
  const [formData, setFormData] = useState({
    amount: "",
    organization: "",
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Donation form submitted:", formData)
  }

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
              <Link
                href="/contact"
                className="text-[#181311] text-sm font-medium leading-normal hover:text-[#f46a25] transition-colors"
              >
                Contact
              </Link>
            </div>
            <Link href="/donate">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors">
                <span className="truncate">Donate Now</span>
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#181311] tracking-light text-[32px] font-bold leading-tight min-w-72">Donate Now</p>
            </div>
            <p className="text-[#181311] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Your donation directly supports Mississippi communities, and you'll receive a dollar-for-dollar tax
              credit. Choose an amount below to get started.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Donation Amount */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Donation Amount</p>
                  <input
                    name="amount"
                    type="text"
                    placeholder="$"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Organization Selection */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Organization (Optional)</p>
                  <select
                    name="organization"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.organization}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an organization</option>
                    <option value="camp-kamassa">Camp Kamassa</option>
                    <option value="hope-village">Hope Village for Children</option>
                    <option value="pregnancy-choices">Center for Pregnancy Choices of Meridian</option>
                    <option value="boys-girls-club">Boys & Girls Clubs of East Mississippi</option>
                    <option value="ms-police-sheriffs">Mississippi Center for Police & Sheriffs</option>
                  </select>
                </label>
              </div>

              {/* Contact Information */}
              <h3 className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Contact Information
              </h3>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">First Name</p>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Last Name</p>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Payment Information */}
              <h3 className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Payment Information
              </h3>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Card Number</p>
                  <input
                    name="cardNumber"
                    type="text"
                    placeholder="Enter your card number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Expiration Date</p>
                  <input
                    name="expirationDate"
                    type="text"
                    placeholder="MM/YY"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">CVV</p>
                  <input
                    name="cvv"
                    type="text"
                    placeholder="Enter CVV"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181311] text-base font-medium leading-normal pb-2">Billing Address</p>
                  <input
                    name="billingAddress"
                    type="text"
                    placeholder="Enter your billing address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-14 placeholder:text-[#8a6e60] p-4 text-base font-normal leading-normal"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#f46a25] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
                >
                  <span className="truncate">Submit Donation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
