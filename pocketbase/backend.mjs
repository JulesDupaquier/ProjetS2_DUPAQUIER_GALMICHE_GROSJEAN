import PocketBase from 'pocketbase'
import type { ArtisteResponse, OeuvreResponse } from './pocketbase-types'
export const pb = new PocketBase('http://193.168.146.141')

// Avoir la liste de toutes les Oeuvres

export async function allOeuvres() {
  const record = await pb.collection('oeuvre').getFullList<OeuvreResponse>()
  return record
}

// Montre la liste de tous les Artistes

export async function allArtistes() {
  const records = await pb.collection('artiste').getFullList<ArtisteResponse>()
  return records
}

// Montre la liste de tous les Artistes et Oeuvres

export async function allArtistesAndOeuvres() {
  const records = await pb.collection('artiste').getFullList({
    expand: 'oeuvre(artiste)'
  })
  return records
}

// Montre les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)

export async function allOeuvresByArtisteId(id: string) {
  const record = await pb
    .collection('artiste')
    .getOne(id, { expand: 'oeuvre(artiste)', fields: 'oeuvre.titre' })
  return record
}

// Montre la liste des œuvres d'un artiste donné

export async function allOeuvresDUnArtiste(Nom: string) {
  const record = await pb
    .collection('artiste')
    .getFirstListItem(Nom ='${Nom}', { expand: 'oeuvre(artiste)' })
  return record
}

// mONTRe la liste des artistes triés par date (d'une manière chronologique) (frise)

export async function artisteSorted() {
  const record = await pb.collection('artiste').getFullList({ sort: 'naissance' })
  return record
}

// Montre la liste des œuvres triées par date (d'une manière chronologique) (frise)

export async function oeuvreSorted() {
  const record = await pb.collection('oeuvre').getFullList({ sort: 'date' })
  return record
}

// Avoir un seul artiste par son ID

export async function oneArtiste(id: string) {
  const record = await pb.collection('artiste').getOne(id)
  return record
}

// Avoir une seule oeuvre par son ID

export async function oneOeuvre(id: string) {
  const record = await pb.collection('Oeuvre').getOne<OeuvreResponse>(id)
  return record
}

// Avoir le titre de l'oeuvre par son ID

export async function getTitreOeuvreById(id: string) {
  const record = await pb.collection('oeuvre').getOne(id, { fields: 'titre' })
  return record
}