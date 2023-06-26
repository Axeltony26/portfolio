import React, { Component } from "react";

export class Projet2 extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Implementation d'une calculatrice en C#
            </h5>
            <p className="card-text">
              La calculatrice est une application qui permet aux utilisateurs
              d'effectuer des opérations mathématiques de base, telles que
              l'addition, la soustraction, la multiplication et la division.
             
              <p>Principales fonctionnalités :</p>
              <ul>
                <li>Saisie de deux nombres pour effectuer des calculs.</li>
                <li>
                  Opérations mathématiques disponibles : addition, soustraction,
                  multiplication et division.
                </li>
                <li>
                  Affichage du résultat des calculs en temps réel à
                  l'utilisateur.
                </li>
              </ul>

              <p>Liste des technologies utilisées :</p>
              <ul>
                <li>C#</li>
              </ul>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Derniere mise a jour 08/07/2023</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projet2;
