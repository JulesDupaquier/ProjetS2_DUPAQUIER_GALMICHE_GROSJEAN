import PocketBase from 'pocketbase'
import type { UsersResponse, RecetteResponse } from './pocketbase-types'
export const pb = new PocketBase('http://193.168.146.141')

// Avoir la liste de toutes les Recettes

export async function allRecettes() {
    const record = await pb.collection('recette').getFullList<RecetteResponse>()
    return record
}

  // Montre la liste de tous les Utilisateurs

export async function allUsers() {
    const records = await pb.collection('users').getFullList<UsersResponse>()
    return records
}

// Montre la liste de tous les Utilisateurs et Recettes

export async function allUsersAndRecettes() {
    const records = await pb.collection('users').getFullList({
      expand: 'recette(users)'
    })
    return records
}

// Montre la liste des Recettes d'un Utilisateur donné

// export async function allRecettesByUser() {
//     const record = await pb
//       .collection('users')
//       .getFirstListItem(Nom ='${Nom}', { expand: 'recette(users)' })
//     return record
// }

// Avoir une seule Recette par son ID

export async function oneRecette(id: string) {
    const record = await pb.collection('recette').getOne<RecetteResponse>(id)
    return record
}

// Avoir un seul Utilisateur par son ID

export async function oneUser(id: string) {
    const record = await pb.collection('users').getOne(id)
    return record
}

// Avoir le titre de la Recette par son ID

export async function getTitreRecetteById(id: string) {
    const record = await pb.collection('recette').getOne(id, { fields: 'nom_recette' })
    return record
}
