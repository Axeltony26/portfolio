import React, { Component } from 'react';

export default class Projet extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">MAXFIT</h5>
            <p className="card-text"> <p>
        MAXFIT est une application de fitness qui permet aux utilisateurs de
        suivre leurs séances d'entraînement, de gérer leur profil et de
        consulter les conseils et les recommandations de leurs entraîneurs.
      </p>

      <p>Principales fonctionnalités :</p>
      <ul>
        <li>
          Enregistrement des informations utilisateur, y compris les données de
          profil, les objectifs de fitness et les préférences personnelles.
        </li>
        <li>
          Gestion des séances d'entraînement, avec la possibilité d'enregistrer
          les exercices, les répétitions, les poids, etc.
        </li>
        <li>
          Interaction avec les entraîneurs, y compris la réception de conseils
          et de recommandations personnalisés.
        </li>
        <li>
          Visualisation de l'historique des séances d'entraînement et des
          progrès réalisés au fil du temps.
        </li>
        <li>
          Notifications et rappels pour encourager la cohérence et la motivation
          dans l'entraînement.
        </li>
      </ul>
      <p>Liste des technologies utilisées :</p>
      <ul>
        <li>React pour le développement du frontend.</li>
        <li>Node.js et Express pour le développement du backend.</li>
        <li>MySQL pour la gestion de la base de données.</li>
      </ul>
      </p>
            <p className="card-text"><small className="text-body-secondary">Derniere mise a jour 08/07/2023</small></p>
          </div>
        </div>
      </div>
    );
  }
}
