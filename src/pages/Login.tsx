
import React from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email({
    message: "Adresse email invalide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const { signIn, loading } = useAuth();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await signIn(data.email, data.password);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-argus-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Connexion
              </h1>
              <p className="text-gray-600">
                Connectez-vous pour accéder à tous nos services
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="8 caractères minimum"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Link
                    to="#"
                    className="text-sm text-argus-teal-500 hover:underline"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-6"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                        Connexion...
                      </span>
                    ) : (
                      <>
                        Se connecter
                        <LogIn className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center mt-6 text-gray-500 text-sm">
                  Vous n'avez pas de compte ?{" "}
                  <Link
                    to="/register"
                    className="text-argus-teal-500 hover:underline"
                  >
                    Inscrivez-vous
                  </Link>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
