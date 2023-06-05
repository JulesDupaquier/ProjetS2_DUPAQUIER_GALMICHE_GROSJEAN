/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Recette = "recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type RecetteRecord = {
	nom_recette?: string
	auteur?: RecordIdString
	photo?: string
	tag?: string
	favori?: boolean
	preparation_time?: number
	prix?: number
	personnes?: number
	ingredients?: string
	materiel?: string
	recette?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type RecetteResponse<Texpand = unknown> = Required<RecetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	recette: RecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	recette: RecetteResponse
	users: UsersResponse
}