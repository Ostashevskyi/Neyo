# from playwright.sync_api import expect
# import re

# wait until the NEYO-35 is resolved



# def test_background_image(home):
#
#     section = home.locator('[data-pw="background-section"]') # data-pw is not implemented in code yet
#     expect(section).to_be_visible()
#
#     # Assert the computed background-image points to hero-bg.webp
#     origin = home.evaluate("() => location.origin")  # e.g., "http://localhost:3000"
#     pattern = re.compile(
#         rf'^url\(["\']?{re.escape(origin)}/home/backgrounds/hero-bg\.webp["\']?\)$'
#     )
#     expect(section).to_have_css("background-image", pattern)