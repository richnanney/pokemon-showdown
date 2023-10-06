export const Abilities: {[k: string]: ModdedAbilityData} = {
	grassdash: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Grass') return priority + 1;
		},
		name: "Grass Dash",
		desc: "All grass type moves used by this Pokemon have +1 to their priority.",
		shortDesc: "Grass moves hit first.",
		rating: 4.0,
		num: 307,
		gen: 7,
	},
	evaporate: {

		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Evaporate');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Evaporate');
				}
				return this.effectState.target;
			}
		},
		name: "Evaporate",
		desc: "Immune to water type moves, and also removes rain.",
		shortDesc: "No more water or rain!",
		rating: 3.5,
		num: 308,
		gen:7
	},
	galewings: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		rating: 4,
	},
	/*
	Custom abilities that need to be done are:
	Drill Beak  	|| Fearow
	Brain Bond  	|| Girafarig
	Evaporate		|| Magcargo -- storm drain done, still needs rain prevention
	Slippery Tail	|| Seviper
	Portal Power	|| Hoopa-Unbound
	*/
};