<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}
$block_props = get_block_wrapper_attributes([
  'class' => 'simple-pie-chart-block-wp',
]);

$slices = $attributes['slices'] ?? [];
$dataSlices = esc_attr(wp_json_encode($slices));
$showLegend = $attributes['showLegend'];
$chartWidth = $attributes['chartWidth'];
$legendBG = $attributes['legendBG'];
$legendStyle = $attributes['legendStyle'];
$chartType = $attributes['chartType'];
?>

<div <?php echo $block_props ?>>
  <div class="simple-pie-chart-block-wp__display" style="--chartWidth:<?php echo esc_attr($chartWidth) ?>px;">

    <?php if ($showLegend && !empty($slices)) : ?>
      <ul class="simple-pie-chart-block-wp__legend" style="--legend-bg:<?php echo esc_attr($legendBG) ?>;">
        <?php foreach ($slices as $slice) : ?>
          <li class="simple-pie-chart-block-wp__legend--entry <?php echo esc_attr($legendStyle) ?>" style="--slice-color:<?php echo esc_attr($slice['sliceColor'] ?? '') ?>;">
            <div class="legend-info">
              <div class="legend-title"><?php echo esc_html($slice['sliceTitle'] ?? '') ?></div>
              <div class="legend-value"><?php echo esc_html($slice['sliceValue'] ?? '') ?></div>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>

    <div class="simple-pie-chart-block-wp__init simple-pie-chart-block-wp-instance" data-chart-type="<?php echo esc_attr($chartType) ?>" data-slices="<?php echo $dataSlices ?>" style="position: relative; width: 100%; height: 100%; margin: 0 auto;">
    </div>

  </div>
</div>