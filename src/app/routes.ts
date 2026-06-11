import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Pricing } from "./pages/Pricing";
import { Gallery } from "./pages/Gallery";
import { Testimonials } from "./pages/Testimonials";
import { Blog, BlogPost } from "./pages/Blog";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";
import { Support } from "./pages/Support";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminBookings } from "./pages/admin/AdminBookings";
import { AdminCustomers } from "./pages/admin/AdminCustomers";
import { AdminServices } from "./pages/admin/AdminServices";
import { AdminPricing } from "./pages/admin/AdminPricing";
import { AdminBlog } from "./pages/admin/AdminBlog";
import { AdminMedia } from "./pages/admin/AdminMedia";
import { AdminTestimonials } from "./pages/admin/AdminTestimonials";
import { AdminNewsletter } from "./pages/admin/AdminNewsletter";
import { AdminTickets } from "./pages/admin/AdminTickets";
import { AdminAnalytics } from "./pages/admin/AdminAnalytics";
import { AdminUsers } from "./pages/admin/AdminUsers";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/services", Component: Services },
      { path: "/services/:slug", Component: ServiceDetail },
      { path: "/pricing", Component: Pricing },
      { path: "/gallery", Component: Gallery },
      { path: "/testimonials", Component: Testimonials },
      { path: "/blog", Component: Blog },
      { path: "/blog/:slug", Component: BlogPost },
      { path: "/booking", Component: Booking },
      { path: "/contact", Component: Contact },
      { path: "/support", Component: Support },
    ],
  },
  {
    Component: AdminLayout,
    children: [
      { path: "/admin", Component: AdminDashboard },
      { path: "/admin/bookings", Component: AdminBookings },
      { path: "/admin/customers", Component: AdminCustomers },
      { path: "/admin/services", Component: AdminServices },
      { path: "/admin/pricing", Component: AdminPricing },
      { path: "/admin/blog", Component: AdminBlog },
      { path: "/admin/media", Component: AdminMedia },
      { path: "/admin/testimonials", Component: AdminTestimonials },
      { path: "/admin/newsletter", Component: AdminNewsletter },
      { path: "/admin/tickets", Component: AdminTickets },
      { path: "/admin/analytics", Component: AdminAnalytics },
      { path: "/admin/users", Component: AdminUsers },
    ],
  },
]);
