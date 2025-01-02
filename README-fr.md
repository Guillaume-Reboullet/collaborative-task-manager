# **Gestion Collaborative des Tâches**

## **Description**
Le système de gestion collaborative des tâches est une application web full-stack conçue pour aider les équipes à créer, assigner et suivre leurs tâches efficacement. Construit avec des technologies web modernes, il intègre des modèles de conception avancés pour garantir évolutivité et maintenabilité.

## **Pourquoi J'ai Créé Ce Projet ?**
Ce projet a été développé pour améliorer mes compétences dans :
- L'implémentation de modèles de conception avancés tels que Singleton, Factory, Builder, Facade, Adapter, Strategy et Observer.
- La création d'une application full-stack utilisant GraphQL et Apollo pour une communication fluide entre le front-end et le back-end.
- L'amélioration de ma compréhension de TypeScript, des principes de programmation orientée objet, et la création de composants modulaires et réutilisables.

## **Fonctionnalités**
- **Authentification Utilisateur** : Connexion et inscription sécurisées avec JWT.
- **Gestion des Équipes** : Création et gestion d'équipes avec un contrôle d'accès basé sur les rôles.
- **Gestion des Tâches** : Création, assignation et mise à jour des tâches avec des priorités et des échéances.
- **Notifications** : Notifications en temps réel pour les mises à jour et assignations de tâches.
- **Analytique** : Aperçu des taux d'achèvement des tâches et des tâches en retard.
- **Design Responsive** : Optimisé pour les ordinateurs et les mobiles.

## **Comment Accéder au Projet**

### **Pour les Utilisateurs Normaux**
1. Visitez l'application en ligne : [https://project.com](https://project.com)  
2. Inscrivez-vous ou connectez-vous pour commencer à gérer vos tâches.

### **Pour les Développeurs**
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/yourusername/collaborative-task-manager.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd collaborative-task-manager
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Configurez les variables d'environnement :
   - Créez un fichier `.env` dans le répertoire racine.
   - Ajoutez les variables suivantes :
     ```
     NODE_ENV=development
     PORT=4000
     JWT_SECRET=your_super_secret_key
     DATABASE_URL=postgresql://user:password@localhost:5432/task_manager
     ```
5. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
6. Ouvrez l'application dans votre navigateur à l'adresse : [http://localhost:4000](http://localhost:4000)

## **Technologies Utilisées**
- **Front-End** : React, TypeScript, Apollo Client, Tailwind CSS
- **Back-End** : Node.js, TypeScript, Apollo Server, GraphQL, Prisma
- **Base de Données** : PostgreSQL
- **Tests** : Jest
- **Modèles de Conception** : Singleton, Builder, Factory, Facade, Adapter, Strategy, Observer
