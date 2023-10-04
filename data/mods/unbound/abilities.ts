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
	/*
	Custom abilities that need to be done are:
	Drill Beak  	|| Fearow
	Brain Bond  	|| Girafarig
	Evaporate		|| Magcargo
	Slippery Tail	|| Seviper
	Portal Power	|| Hoopa-Unbound
	Abilities that have changed that need to be updated are:
	Gale Wings
	*/
};