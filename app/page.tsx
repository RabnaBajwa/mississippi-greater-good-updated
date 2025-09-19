import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-lg font-bold">Mississippi's Greater Good</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tax-credits">
            Tax Credits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Supporting Mississippi's Non-Profit Organizations
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Mississippi's Greater Good connects you with qualified non-profit organizations eligible for Mississippi's Charitable Tax Credit program. We don't handle donations directly - we help you find the right non-profits to support.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="https://www.dor.ms.gov/charitable-contribution-credits" target="_blank" rel="noopener noreferrer">
                    Learn About Tax Credits
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Connecting You with Mississippi Non-Profits
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We serve as a bridge between generous donors and qualified non-profit organizations throughout Mississippi. Greater Good MS doesn't collect or handle donations - instead, we help you identify eligible non-profits that qualify for Mississippi's Charitable Tax Credit program.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    All donations go directly to the non-profit organizations, ensuring 100% of your contribution supports their important work in our communities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="https://www.dor.ms.gov/charitable-contribution-credits" target="_blank" rel="noopener noreferrer">
                      View Tax Credit Program
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Mississippi Greater Good"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/images/greater-good-logo-alt.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Help</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We make it easy to connect with qualified non-profit organizations that are making a difference in Mississippi communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Find Non-Profits</h3>
                  <p className="text-gray-500">
                    Discover qualified non-profit organizations that are eligible for Mississippi's Charitable Tax Credit program.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Target className="h-10 w-10 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Direct Donations</h3>
                  <p className="text-gray-500">
                    Donate directly to the non-profits that matter to you. We don't handle your donations - they go straight to the organizations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                  <Award className="h-10 w-10 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tax Benefits</h3>
                  <p className="text-gray-500">
                    Learn about Mississippi's Charitable Tax Credit program and maximize your tax benefits while supporting great causes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Non-Profit Partners</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These qualified non-profit organizations are making a positive impact in Mississippi communities and are eligible for the state's Charitable Tax Credit program.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="Boys and Girls Club Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/images/boys-girls-club-logo.jpg"
                    width="100"
                  />
                  <CardTitle>Boys and Girls Club</CardTitle>
                  <Badge variant="secondary">Youth Development</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Providing safe spaces and programs for young people to learn, grow, and develop into productive citizens.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="Hope Village Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/images/hope-village-logo.jpg"
                    width="100"
                  />
                  <CardTitle>Hope Village</CardTitle>
                  <Badge variant="secondary">Community Support</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Supporting families and individuals in need through comprehensive community programs and services.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="Camp Kamassa Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/images/camp-kamassa-logo.png"
                    width="100"
                  />
                  <CardTitle>Camp Kamassa</CardTitle>
                  <Badge variant="secondary">Youth Programs</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Providing enriching camp experiences and outdoor education for children and youth development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="MS Police and Sheriffs Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/images/ms-police-sheriffs-logo.png"
                    width="100"
                  />
                  <CardTitle>MS Police & Sheriffs Association</CardTitle>
                  <Badge variant="secondary">Public Safety</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Supporting law enforcement officers and promoting public safety throughout Mississippi communities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="Pregnancy Choices Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/images/pregnancy-choices-logo.png"
                    width="100"
                  />
                  <CardTitle>Pregnancy Choices</CardTitle>
                  <Badge variant="secondary">Family Support</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Providing support, resources, and education for families and expectant mothers in Mississippi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Image
                    alt="Providence Christian Academy Logo"
                    className="mx-auto mb-4 rounded-lg"
                    height="100"
                    src="/providence-christian-academy-logo.jpg"
                    width="100"
                  />
                  <CardTitle>Providence Christian Academy</CardTitle>
                  <Badge variant="secondary">Education</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-center">
                    Providing quality Christian education and character development for students in Mississippi.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Support Mississippi Non-Profits?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about Mississippi's Charitable Tax Credit program and start supporting the non-profit organizations that are making a difference in our communities.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700" size="lg">
                  <Link href="https://www.dor.ms.gov/charitable-contribution-credits" target="_blank" rel="noopener noreferrer">
                    Start Supporting Non-Profits
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Mississippi's Greater Good. All rights reserved. We connect donors with qualified non-profit organizations.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/tax-credits">
            Tax Credits
          </Link>
        </nav>
      </footer>
    </div>
  )
}