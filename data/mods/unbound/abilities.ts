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
		onStart(source) {
			if (['raindance', 'primordialsea'].includes(source.effectiveWeather())) {
				this.field.clearWeather();
			}
		},
		onAnySetWeather(target, source, weather) {
			if (weather.id === 'raindance') return false;
		},
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
	drillbeak: {
		onModifyMove(move) {
			if (move.name.includes("Drill")) {
				move.willCrit === true;
			}
		},
		name: "Drill Beak",
		rating: 4.0,
		gen:7
	}

	/*
	Custom abilities that need to be done are:
	Brain Bond (Same as parental bond) 	|| Girafarig
	Slippery Tail (Priority given to 'tail' moves)	|| Seviper
	Portal Power(uhhh i dont remember lmao)			|| Hoopa-Unbound
	*/
};