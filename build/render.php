<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}
$block_props = get_block_wrapper_attributes([
  'class' => 'wp-simple-pie-chart-block',
]);

$slices = $attributes['slices'] ?? [];
$dataSlices = esc_attr(json_encode($slices));
$showLegend = $attributes['showLegend'];
$chartWidth = $attributes['chartWidth'];
$legendBG = $attributes['legendBG'];
$legendStyle = $attributes['legendStyle'];
$chartType = $attributes['chartType'];
?>

<div <?= $block_props ?>>
  <div class="wp-simple-pie-chart-block__display" style="--chartWidth:<?= esc_attr($chartWidth) ?>px;">

    <?php if ($showLegend && !empty($slices)) : ?>
      <ul class="wp-simple-pie-chart-block__legend" style="--legend-bg:<?= esc_attr($legendBG) ?>;">
        <?php foreach ($slices as $slice) : ?>
          <li class="wp-simple-pie-chart-block__legend--entry <?= esc_attr($legendStyle) ?>" style="--slice-color:<?= esc_attr($slice['sliceColor'] ?? '') ?>;">
            <div class="legend-info">
              <div class="legend-title"><?= esc_html($slice['sliceTitle'] ?? '') ?></div>
              <div class="legend-value"><?= esc_html($slice['sliceValue'] ?? '') ?></div>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>

    <div class="wp-simple-pie-chart-block__init wp-simple-pie-chart-block-instance" data-chart-type="<?= esc_attr($chartType) ?>" data-slices="<?= $dataSlices ?>" style="position: relative; width: 100%; height: 100%; margin: 0 auto;">
    </div>

  </div>
</div>