import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Bell, Globe, Moon, Sun, Shield } from "lucide-react";
const SettingsTab = () => {
  const {
    toast
  } = useToast();
  const handleSave = (section: string) => {
    toast({
      title: "Paramètres sauvegardés",
      description: `Les paramètres ${section} ont été mis à jour avec succès.`
    });
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Paramètres</h2>
        <p className="text-muted-foreground">
          Gérez vos préférences et paramètres de compte.
        </p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Apparence</TabsTrigger>
          <TabsTrigger value="privacy">Confidentialité</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>
                Paramètres généraux de votre compte ArgusAI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Langue</Label>
                <select id="language" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Fuseau horaire</Label>
                <select id="timezone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                  <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                  <option value="Europe/London">Europe/London (GMT)</option>
                  <option value="America/New_York">America/New_York (GMT-5)</option>
                  <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Label htmlFor="marketing-emails">Recevoir les emails marketing</Label>
                <Switch id="marketing-emails" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Label htmlFor="newsletter">S'inscrire à la newsletter</Label>
                <Switch id="newsletter" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSave("généraux")}>Enregistrer les changements</Button>
            </CardFooter>
          </Card>
          
          
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Préférences de notification</CardTitle>
              </div>
              <CardDescription>
                Configurez quand et comment vous souhaitez être notifié.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="email-new-estimation">Nouvelles estimations</Label>
                    <Switch id="email-new-estimation" defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="email-marketing">Offres marketing</Label>
                    <Switch id="email-marketing" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="email-security">Alertes de sécurité</Label>
                    <Switch id="email-security" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Navigateur</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="browser-new-estimation">Nouvelles estimations</Label>
                    <Switch id="browser-new-estimation" defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="browser-updates">Mises à jour de l'application</Label>
                    <Switch id="browser-updates" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">SMS</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="sms-security">Alertes de sécurité</Label>
                    <Switch id="sms-security" defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="sms-promotions">Promotions spéciales</Label>
                    <Switch id="sms-promotions" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSave("de notification")}>Enregistrer les changements</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Sun className="h-5 w-5" />
                <Moon className="h-5 w-5" />
                <CardTitle>Apparence</CardTitle>
              </div>
              <CardDescription>
                Personnalisez l'apparence de votre tableau de bord ArgusAI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Thème</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <Sun className="h-6 w-6" />
                    <span>Clair</span>
                  </div>
                  
                  <div className="border rounded-md p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary border-primary">
                    <Moon className="h-6 w-6" />
                    <span>Sombre</span>
                  </div>
                  
                  <div className="border rounded-md p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="flex">
                      <Sun className="h-6 w-6" />
                      <Moon className="h-6 w-6" />
                    </div>
                    <span>Système</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Densité d'affichage</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start text-gray-600">Compacte</Button>
                  <Button variant="outline" className="justify-start border-primary text-blue-600">Standard</Button>
                  <Button variant="outline" className="justify-start">Confortable</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Taille de la police</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">A</span>
                    <input type="range" min="1" max="3" step="1" defaultValue="2" className="w-full mx-4" />
                    <span className="text-lg">A</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSave("d'apparence")}>Enregistrer les changements</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <CardTitle>Confidentialité</CardTitle>
              </div>
              <CardDescription>
                Gérez vos préférences de confidentialité et vos données personnelles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Données et cookies</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="cookie-essential">Cookies essentiels</Label>
                    <Switch id="cookie-essential" defaultChecked disabled />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="cookie-analytics">Cookies analytiques</Label>
                    <Switch id="cookie-analytics" defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="cookie-marketing">Cookies marketing</Label>
                    <Switch id="cookie-marketing" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Historique et données</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Vous pouvez télécharger toutes vos données ou supprimer entièrement votre compte ArgusAI.
                </p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="justify-start" onClick={() => {
                  toast({
                    title: "Téléchargement en cours",
                    description: "La préparation de vos données a commencé. Vous recevrez un email lorsqu'elles seront prêtes."
                  });
                }}>
                    <Globe className="mr-2 h-4 w-4" />
                    Télécharger mes données
                  </Button>
                  
                  <Button variant="destructive" className="justify-start" onClick={() => {
                  toast({
                    title: "Action requise",
                    description: "Veuillez consulter votre email pour confirmer la suppression de votre compte.",
                    variant: "destructive"
                  });
                }}>
                    Supprimer mon compte
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSave("de confidentialité")}>Enregistrer les changements</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default SettingsTab;