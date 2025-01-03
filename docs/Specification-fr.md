
# **Spécification du Projet : Système de Gestion Collaborative des Tâches**

## **Vue d'ensemble**
Ce document fournit une spécification détaillée du Système de Gestion Collaborative des Tâches, couvrant les fonctionnalités, les exigences et la structure du front-end, du back-end et des composants de la base de données.

## **Fonctionnalités**

### **Authentification Utilisateur**
- Inscription et connexion sécurisées avec des mots de passe hachés (bcrypt).
- Authentification basée sur des jetons avec JWT (JSON Web Tokens).
- Contrôle d'accès basé sur les rôles (Admin, Manager, Membre).

### **Gestion des Tâches**
- Créer, mettre à jour, supprimer des tâches avec des attributs tels que le titre, la description, la priorité et les échéances.
- Assigner des tâches aux membres de l'équipe.
- Plusieurs options de tri (par priorité, échéance).

### **Gestion des Équipes**
- Créer et gérer des équipes.
- Ajouter ou supprimer des membres des équipes (Admin).
- Attribution de rôles au sein des équipes (par ex., Admin, Manager, Membre).

### **Notifications**
- Notifications en temps réel pour les mises à jour ou les assignations de tâches.
- Livraison des notifications via des messages in-app.

### **Analytique**
- Suivre les taux d'achèvement des tâches et les tâches en retard.
- Visualiser les rapports de productivité de l'équipe.

### **Design Responsive**
- Entièrement optimisé pour les utilisateurs sur ordinateur et mobile.

## **Exigences**

### **Exigences Fonctionnelles**
- Les utilisateurs doivent pouvoir s'inscrire, se connecter et se déconnecter en toute sécurité.
- Seuls les utilisateurs autorisés peuvent accéder aux ressources protégées.
- Les utilisateurs peuvent gérer les tâches et les équipes en fonction de leurs rôles.
- Les notifications doivent être envoyées aux membres de l'équipe concernés.

### **Exigences Non Fonctionnelles**
- **Évolutivité** : Le système doit pouvoir gérer un nombre croissant d'utilisateurs et de tâches.
- **Maintenabilité** : Code propre et modulaire suivant les principes de la POO et les modèles de conception.
- **Sécurité** : Stockage sécurisé des mots de passe, accès basé sur les rôles et routes API protégées.

## **Technologies Utilisées**
- **Front-End** : React, TypeScript, Apollo Client, Tailwind CSS
- **Back-End** : Node.js, TypeScript, Apollo Server, GraphQL, Prisma
- **Base de Données** : PostgreSQL
- **Tests** : Jest
- **Modèles de Conception** : Singleton, Builder, Factory, Facade, Adapter, Strategy, Observer
