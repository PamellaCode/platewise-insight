
import React from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth";

const registerSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères."
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères."
  }),
  email: z.string().email({
    message: "Adresse email invalide."
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères."
  }),
  terms: z.boolean().refine(value => value === true, {
    message: "Vous devez accepter les conditions d'utilisation."
  })
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const { signUp, loading } = useAuth();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false
    }
  });

  const onSubmit = async (data: RegisterFormValues) => {
    await signUp(data.email, data.password, data.firstName, data.lastName);
  };

  return <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-argus-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Créez votre compte
              </h1>
              <p className="text-gray-600">
                Rejoignez ArgusAI pour accéder à tous nos services d'estimation
                de véhicule
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="firstName" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <FormField control={form.control} name="lastName" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Dupont" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>

                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="password" render={({
                field
              }) => <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="8 caractères minimum" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300 text-argus-blue-600 focus:ring-argus-blue-500"
                        />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel className="text-sm text-gray-600">
                          J'accepte les{" "}
                          <Link to="#" className="text-argus-teal-500 hover:underline">
                            conditions d'utilisation
                          </Link>{" "}
                          et la{" "}
                          <Link to="#" className="text-argus-teal-500 hover:underline">
                            politique de confidentialité
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-argus-teal-500 hover:bg-argus-teal-600 text-white py-6" 
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                        Inscription...
                      </span>
                    ) : (
                      <>
                        Créer mon compte
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center mt-6 text-gray-500 text-sm">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/login" className="text-argus-teal-500 hover:underline">
                    Connectez-vous
                  </Link>
                </div>
              </form>
            </Form>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Pourquoi s'inscrire sur ArgusAI ?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-argus-teal-500" />
                  </div>
                  <p className="ml-3 text-gray-600">Estimations en temps réel de vos véhicules</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-argus-teal-500" />
                  </div>
                  <p className="ml-3 text-gray-600">
                    Suivi de l'évolution des prix du marché
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-argus-teal-500" />
                  </div>
                  <p className="ml-3 text-gray-600">
                    Conseils personnalisés pour optimiser la valeur de votre
                    véhicule
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>;
};

export default RegisterPage;
