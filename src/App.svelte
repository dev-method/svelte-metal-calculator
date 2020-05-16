<script>
	import metalls from './data.js'
	import profile_data from './profile_data.js'
	let params = {
		profile:0,
		d:0,
		l:0,
		w:0,
		t:0,
		h:0,
		s:0,
		result:0
	}
	let selected_mark = metalls[0].id
	let selected_value = 0
	let selected_density = metalls[0].group[0].density
	let profile = params.profile
	$: selected_met = metalls.find(item=>item.id === selected_mark)
	$: density = selected_met.group[selected_value].density
	function calculate(profile, density, d, l, w, t, h, s) {
		let calc_result;
		switch (profile) {
			case 0:
				calc_result = (((3.14*((Number(d)*Number(d))/4)*Number(l))/1000000000)*Number(density)).toFixed(2);
				break;
			case 1:
				calc_result = ((((Number(w)*Number(w))*Number(l))/1000000000)*Number(density)).toFixed(2);
				break;
			case 2:
				calc_result = (((Number(w)*Number(t)*Number(l))/1000000000)*Number(density)).toFixed(2);
				break;
			case 3:
				calc_result = ((((3.14*((Number(d)/2)*(Number(d)/2))*Number(l))- (3.14*(((Number(d)-Number(t))/2)*((Number(d)-Number(t))/2))*Number(l)))/1000000000)*Number(density)).toFixed(2)
				break;
			case 4:
				calc_result = ((((Number(h)*Number(w)*Number(l))-((Number(h)-2*Number(t))*(Number(w)-2*Number(t))*Number(l)))/1000000000)*Number(density)).toFixed(2)
				break;
			case 5:
				calc_result = ((((Number(h)*Number(w)*Number(l))-((Number(h)-2*Number(t))*(Number(w)-Number(t))*Number(l)))/1000000000)*Number(density)).toFixed(2);
				break;
			case 6:
				calc_result = (((((3*1.7320508)/2)*Number(h)*Number(h)*Number(l))/1000000000)*Number(density)).toFixed(2);
				break;
			case 7:
				calc_result = ((((Number(h)*Number(w)*Number(l))-((Number(h)-2*Number(t))*(Number(w)-Number(s))*Number(l)))/1000000000)*Number(density)).toFixed(2);
				break;
			case 8:
				calc_result = ((((Number(h)*Number(w)*Number(l))-((Number(h)-Number(t))*(Number(w)-Number(t))*Number(l)))/1000000000)*Number(density)).toFixed(2);
				break;
		}
		return params={
			profile:profile,
			d:d,
			l:l,
			w:w,
			t:t,
			h:h,
			s:s,
			result:calc_result
		}
	}
	function resetInputs(prof_val) {
		return params = {
			profile: prof_val,
			d: 0,
			l: 0,
			w: 0,
			t: 0,
			h: 0,
			s:0,
			result: 0
		}
	}
</script>

<main>
	<div class="calculator-container">
		<div class="display-container">
			<div class="profile-draw">
				{#each profile_data as profile_item}
					{#if profile_item.id === params.profile}
						<div class="profile-image-wr">
							<img src={profile_item.draw_src}/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="workbox-container">
			<div class="profiles-icons-container">
				{#each profile_data as profile_item}
					<div class="profile-image-wr" on:click={()=>params = resetInputs(profile_item.id)}>
						<img src={profile_item.icon_src}/>
					</div>
				{/each}
			</div>
			<div class="mark-select-wr">
				<div class="material-title">
					ВЫБЕРИТЕ МАТЕРИАЛ
				</div>
				<select bind:value={selected_mark} on:change={() => selected_value = 0}>
					{#each metalls as item }
						<option value={item.id}>{item.name}</option>
					{/each}
				</select>
				<div class="material-title">
					УКАЖИТЕ МАРКУ
				</div>
				{#if selected_mark}
					<select bind:value={selected_value} on:change={() => selected_density = selected_value}>
						{#each selected_met.group as item, index }
							<option value={index}>{item.name}</option>
						{/each}
					</select>
				{/if}
			</div>
			<div class="workbox-inputs-wt">
				<div class="workbox-input-title">
					ВВЕДИТЕ РАЗМЕРЫ
				</div>
                {#if params.profile===0}
						<div class="workbox-input-wr">
							<label for="diameter">ДИАМЕТР (d), ММ</label>
							<input name="diametr" class="workbox-input" id="diameter" bind:value={params.d}>
						</div>
						<div class="workbox-input-wr">
							<label for="length">ДЛИНА, ММ</label>
							<input name="length" class="workbox-input" id="length" bind:value={params.l}>
						</div>
				{:else if params.profile===1}
					<div class="workbox-input-wr">
						<label for="width">ШИРИНА (h), ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===2 }
					<div class="workbox-input-wr">
						<label for="width">ШИРИНА (h), ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА (l), ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА, ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
				{:else if params.profile===3 }
					<div class="workbox-input-wr">
						<label for="diameter">ДИАМЕТР (d), ММ</label>
						<input name="diameter" class="workbox-input" id="diameter" bind:value={params.d}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА (k), ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===4 }
					<div class="workbox-input-wr">
						<label for="height">ДЛИНА СТОРОНЫ h, ММ</label>
						<input name="height" class="workbox-input" id="height" bind:value={params.h}>
					</div>
					<div class="workbox-input-wr">
						<label for="width">ДЛИН СТОРОНЫ k, ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА (k), ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===5 }
					<div class="workbox-input-wr">
						<label for="height">ДЛИНА СТОРОНЫ h, ММ</label>
						<input name="height" class="workbox-input" id="height" bind:value={params.h}>
					</div>
					<div class="workbox-input-wr">
						<label for="width">ДЛИНА СТОРОНЫ l, ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА (k), ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===6 }
					<div class="workbox-input-wr">
						<label for="height">РАЗМЕР ГРАНИ h, ММ</label>
						<input name="height" class="workbox-input" id="height" bind:value={params.h}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===7 }
					<div class="workbox-input-wr">
						<label for="height">ДЛИНА СТОРОНЫ h, ММ</label>
						<input name="height" class="workbox-input" id="height" bind:value={params.h}>
					</div>
					<div class="workbox-input-wr">
						<label for="width">ДЛИНА СТОРОНЫ l, ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="s-measure">ТОЛЩИНА (s), ММ</label>
						<input name="s-measure" class="workbox-input" id="s-measure" bind:value={params.s}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА (k), ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
					<div class="workbox-input-wr">
						<label for="length">ДЛИНА, ММ</label>
						<input name="length" class="workbox-input" id="length" bind:value={params.l}>
					</div>
				{:else if params.profile===8 }
					<div class="workbox-input-wr">
						<label for="height">ДЛИНА СТОРОНЫ h, ММ</label>
						<input name="height" class="workbox-input" id="height" bind:value={params.h}>
					</div>
					<div class="workbox-input-wr">
						<label for="width">ДЛИНА СТОРОНЫ l, ММ</label>
						<input name="width" class="workbox-input" id="width" bind:value={params.w}>
					</div>
					<div class="workbox-input-wr">
						<label for="thickness">ТОЛЩИНА, ММ</label>
						<input name="thickness" class="workbox-input" id="thickness" bind:value={params.t}>
					</div>
				{/if}
				<div class="workbox-submit-btn-wr">
					<button on:click={()=>params=calculate(params.profile, density, params.d, params.l, params.w, params.t, params.h, params.s)}>Рассчитать</button>
				</div>
			</div>
			<div class="workbox-result-wr">
				<div class="workbox-result-title">
					ИТОГО ВЕС (КГ):
				</div>
				<div class="workbox-result"><span>{params.result}</span>
			</div>
		</div>
	</div>
	</div>
</main>

<style>

</style>