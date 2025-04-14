
import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-argus-blue-600 to-argus-violet-600 hover:from-argus-blue-700 hover:to-argus-violet-700 text-white font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all",
        destructive: "bg-destructive text-white hover:bg-destructive/90 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all",
        outline: "border-2 border-argus-blue-500 bg-transparent text-argus-blue-600 hover:bg-argus-blue-50 hover:text-argus-blue-700 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all",
        secondary: "bg-gradient-to-r from-argus-blue-500 to-argus-red-500 text-white font-semibold shadow hover:shadow-lg hover:from-argus-blue-600 hover:to-argus-red-600 hover:-translate-y-0.5 transition-all",
        ghost: "hover:bg-gray-100 text-argus-blue-600 hover:text-argus-blue-700 hover:-translate-y-0.5 transition-all",
        link: "text-argus-blue-600 underline-offset-4 hover:underline transition-all font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
