export const Abilities: {[k: string]: ModdedAbilityData} = {
	grassdash: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Grass') return priority + 1;
		},
		name: "Grass Dash",
		desc: "All grass type moves used by this Pokemon have +1 to their priority.",
		shortDesc: "Grass moves hit first.",
		rating: 4.0,
		num: 307,
		gen: 7,
	},
};