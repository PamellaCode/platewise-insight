
import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-argus-red-400 via-argus-violet-400 to-argus-blue-400 hover:from-argus-red-500 hover:via-argus-violet-500 hover:to-argus-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all backdrop-blur-sm",
        destructive: "bg-destructive text-white hover:bg-destructive/90 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all",
        outline: "border-2 border-argus-violet-300 bg-transparent text-argus-violet-600 hover:bg-argus-violet-50 hover:text-argus-violet-700 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all",
        secondary: "bg-gradient-to-r from-argus-blue-400 via-argus-violet-400 to-argus-red-400 text-white font-semibold shadow hover:shadow-lg hover:from-argus-blue-500 hover:via-argus-violet-500 hover:to-argus-red-500 hover:-translate-y-0.5 transition-all backdrop-blur-sm",
        ghost: "hover:bg-gray-100 text-argus-violet-500 hover:text-argus-violet-600 hover:-translate-y-0.5 transition-all",
        link: "text-argus-violet-500 underline-offset-4 hover:underline transition-all font-semibold",
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
