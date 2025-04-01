import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Lock, Key } from "lucide-react";
import { toast } from "sonner";
const profileFormSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères"
  }),
  prenom: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères"
  }),
  email: z.string().email({
    message: "Adresse email invalide"
  }),
  telephone: z.string().optional()
});
const passwordFormSchema = z.object({
  currentPassword: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères"
  }),
  newPassword: z.string().min(8, {
    message: "Le nouveau mot de passe doit contenir au moins 8 caractères"
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirmation du mot de passe requise"
  })
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"]
});
type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;
const ProfileTab = () => {
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@example.com",
      telephone: "06 12 34 56 78"
    }
  });
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  });
  function onProfileSubmit(data: ProfileFormValues) {
    toast.success("Profil mis à jour avec succès");
    console.log("Profile form submitted:", data);
  }
  function onPasswordSubmit(data: PasswordFormValues) {
    toast.success("Mot de passe mis à jour avec succès");
    console.log("Password form submitted:", data);
  }
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profil</h1>
        <p className="text-muted-foreground">
          Gérez vos informations personnelles et vos paramètres de compte
        </p>
      </div>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-flex">
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Compte</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Sécurité</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium mb-1">Photo de profil</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Cette photo sera utilisée comme votre avatar
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-gray-700">
                      Changer
                    </Button>
                    <Button variant="outline" size="sm" className="text-gray-600">
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={profileForm.control} name="prenom" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={profileForm.control} name="nom" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={profileForm.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                            </span>
                            <Input className="rounded-l-none" placeholder="jean.dupont@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={profileForm.control} name="telephone" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                            </span>
                            <Input className="rounded-l-none" placeholder="06 12 34 56 78" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Optionnel - utilisé pour vous contacter en cas de besoin
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit">Sauvegarder les modifications</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Changer de mot de passe</CardTitle>
              <CardDescription>
                Mettez à jour votre mot de passe pour sécuriser votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                  <FormField control={passwordForm.control} name="currentPassword" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Mot de passe actuel</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                              <Key className="h-4 w-4 text-muted-foreground" />
                            </span>
                            <Input className="rounded-l-none" type="password" placeholder="••••••••" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={passwordForm.control} name="newPassword" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Nouveau mot de passe</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormDescription>
                          Au moins 8 caractères
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={passwordForm.control} name="confirmPassword" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Confirmer le mot de passe</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit">Mettre à jour le mot de passe</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sessions actives</CardTitle>
              <CardDescription>
                Gérez vos sessions actives sur différents appareils
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Cet appareil</p>
                  <p className="text-sm text-muted-foreground">Paris, France · Chrome · Dernière activité il y a 2 minutes</p>
                </div>
                <Button variant="outline" size="sm" disabled className="text-blue-600">
                  Session actuelle
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">iPhone X</p>
                  <p className="text-sm text-muted-foreground">Lyon, France · Safari Mobile · Dernière activité hier</p>
                </div>
                <Button variant="outline" size="sm">
                  Déconnecter
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Déconnecter toutes les autres sessions</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default ProfileTab;